"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const pip_services3_mongodb_node_1 = require("pip-services3-mongodb-node");
const BundleBackendFactory_1 = require("../build/BundleBackendFactory");
class BundleBackendProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-services-facade", "Client facade for iQuipsys Positron");
        this._factories.add(new BundleBackendFactory_1.BundleBackendFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
        this._factories.add(new pip_services3_mongodb_node_1.DefaultMongoDbFactory);
    }
}
exports.BundleBackendProcess = BundleBackendProcess;
//# sourceMappingURL=BundleBackendProcess.js.map