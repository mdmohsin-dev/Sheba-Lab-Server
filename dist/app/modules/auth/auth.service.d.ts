export declare const AuthService: {
    login: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: any;
        refreshToken: any;
        needPasswordChange: any;
    }>;
    changePassword: (user: any, payload: any) => Promise<{
        message: string;
    }>;
    forgotPassword: (payload: {
        email: string;
    }) => Promise<void>;
    refreshToken: (token: string) => Promise<{
        accessToken: any;
        refreshToken: any;
        needPasswordChange: any;
    }>;
    getMe: (user: any) => Promise<any>;
};
//# sourceMappingURL=auth.service.d.ts.map