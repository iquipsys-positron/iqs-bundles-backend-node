import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { BundleBackendFactory } from '../build/BundleBackendFactory';

export class BundleBackendProcess extends ProcessContainer {

    public constructor() {
        super("iqs-services-facade", "Client facade for iQuipsys Positron");
        this._factories.add(new BundleBackendFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
