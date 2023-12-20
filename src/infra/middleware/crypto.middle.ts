import crypto, { Cipher } from "crypto";
import { EncryptData } from "../../dtos/types/props.middle";

function encryptData(text: string): EncryptData {
  const key: Buffer = crypto.scryptSync("notfound", "salt", 32);

  const hash: Cipher = crypto.createCipheriv(
    "aes-256-gcm",
    key,
    Buffer.from("hydra_server")
  );

  let hashEncode: string = hash.update(text, "utf8", "hex");
  hashEncode += hash.final("hex");

  return {
    hash: hashEncode,
    key
  };
}

function unencryptData(info: any): string {
  const key: Buffer = crypto.scryptSync("notfound", "salt", 32);
  const decipher: Cipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from("hydra_server")
  );
  let hashEncode: string = decipher.update(info, "hex", "utf8");

  return hashEncode;
}

export { encryptData, unencryptData };
