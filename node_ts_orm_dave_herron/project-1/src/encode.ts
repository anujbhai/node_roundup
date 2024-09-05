import { encode } from "uuencode";
import {promises as fsp} from "fs"

export async function encode_file(fn: string): Promise<string> {
  const text = await fsp.readFile(fn)
  return encode(text)
}
(async () => {
  console.log(await encode_file(process.argv[2]))
})()

