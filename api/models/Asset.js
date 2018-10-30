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

class Asset {
    constructor (identifier, address) {
        this.identifier = identifier;
        this.address = address;
    }

    create (symbol, name, identifier) {
        const asset = new AssetModel({
            symbol,
            name,
            identifier
        });
        asset.save();
    }

    setAddress (address) {
        AssetModel.findOne({ identifier: this.identifier }).exec((err, asset) => {
            asset.address = address;
            asset.save();
        });
    }

    updateConfirm (confirmations) {
        AssetModel.findOne({ identifier: this.identifier }).exec((err, asset) => {
            asset.confirmations = confirmations;
            asset.save();
        });
    }

    setMetadata (key, value) {
        AssetModel.findOne({ address: this.address }).exec((err, asset) => {
            asset.metadata = (asset.metadata) ? Object.assign({}, asset.metadata, {
                [key]: value
            }) : { [key]: value };
            asset.save();
        });
    }
}


module.exports = Asset;
