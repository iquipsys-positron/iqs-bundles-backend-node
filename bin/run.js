let BundleBackendProcess = require('../obj/src/container/BundleBackendProcess').BundleBackendProcess;

try {
    new BundleBackendProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
