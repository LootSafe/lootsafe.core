const mongoose = require('mongoose');

const { dbURI } = require('../../config');
const AssetModel = mongoose.model(
    'Asset',
    {
        symbol: String,
        name: String,
        identifier: String,
        address: String,
        confirmations: Number,
        metadata: Object,
        events: Object
    });

mongoose.connect(dbURI, { useNewUrlParser: true });

/**
 * Asset
 * @constructor
 */
class Asset {
    constructor (identifier, address) {
        this.identifier = identifier;
        this.address = address;
    }

    /**
     * Create a new asset in the db
     * @param symbol the symbol of the asset
     * @param name the name of the asset
     * @param identifier the identifier for the asset
     */
    create (symbol, name, identifier) {
        const asset = new AssetModel({
            symbol,
            name,
            identifier
        });
        asset.save();
    }

    /**
     * Set the address of the asset in the db
     * @param address the address of the asset
     */
    setAddress (address) {
        AssetModel.findOne({ identifier: this.identifier }).exec((err, asset) => {
            asset.address = address;
            asset.save();
        });
    }

    /**
     * Add a confirm to the asset
     * @param confirmations the number of chain confirmations
     */
    updateConfirm (confirmations) {
        AssetModel.findOne({ identifier: this.identifier }).exec((err, asset) => {
            asset.confirmations = confirmations;
            asset.save();
        });
    }

    /**
     * Set a new metadata for the db
     * @param key bytes32 (string form) key of the metadata
     * @param value string value of the metadata
     */
    setMetadata (key, value) {
        AssetModel.findOne({ address: this.address }).exec((err, asset) => {
            asset.metadata = (asset.metadata) ? Object.assign({}, asset.metadata, {
                [key]: value
            }) : { [key]: value };
            asset.save();
        });
    }

    /**
     * Get all assets in the db
     */
    getAll () {
        return AssetModel.find((err, assets) => {
            return assets;
        });
    }

    /**
     * Get assets from db by address or identifier
     * @param identifier the identifier of the asset
     * @param address the address of the asset
     */
    get (identifier, address) {
        if (address) {
           return AssetModel.find({ address }, (err, assets) => {
                return assets;
            });
        } else {
            return AssetModel.find({ identifier }, (err, assets) => {
                return assets;
            });
        }
    }
}


module.exports = Asset;
