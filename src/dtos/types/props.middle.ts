export interface Encryp {
    email:      string;
    password:   string;
}

export interface UncrypResponse {
    token:      Encryp;
    iat:        number;
    exp:        number;
}


export interface EncryptData {
    hash:       string;
    key:        Buffer;
};

export interface ResponseCors {
    value: boolean;
    data?: unknown;
    message: string
}
