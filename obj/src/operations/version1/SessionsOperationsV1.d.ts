import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FacadeOperations } from 'pip-services3-facade-node';
export declare class SessionsOperationsV1 extends FacadeOperations {
    private static _defaultConfig1;
    private _cookie;
    private _cookieEnabled;
    private _maxCookieAge;
    private _settingsClient;
    private _accountsClient;
    private _sessionsClient;
    private _passwordsClient;
    private _rolesClient;
    private _emailSettingsClient;
    private _smsSettingsClient;
    private _organizationsClient;
    private _invitationsClient;
    constructor();
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    loadSessionOperation(): (req: any, res: any, next: any) => void;
    signupOperation(): (req: any, res: any) => void;
    signupValidateOperation(): (req: any, res: any) => void;
    signinOperation(): (req: any, res: any) => void;
    signoutOperation(): (req: any, res: any) => void;
    getSessionsOperation(): (req: any, res: any) => void;
    restoreSessionOperation(): (req: any, res: any) => void;
    getUserSessionsOperation(): (req: any, res: any) => void;
    getCurrentSessionOperation(): (req: any, res: any) => void;
    closeSessionOperation(): (req: any, res: any) => void;
    private loadSession;
    private openSession;
    private signup;
    private signupValidate;
    private signin;
    private signout;
    private getSessions;
    private restoreSession;
    private getUserSessions;
    private getCurrentSession;
    private closeSession;
}
