import { encode } from "uuencode";
import { promises as fsp } from "fs";
export async function encode_file(fn) {
    const text = await fsp.readFile(fn);
    return encode(text);
}
(async () => {
    console.log(await encode_file(process.argv[2]));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2VuY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxRQUFRLElBQUksR0FBRyxFQUFDLE1BQU0sSUFBSSxDQUFBO0FBRWxDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVyxDQUFDLEVBQVU7SUFDMUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3JCLENBQUM7QUFDRCxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNqRCxDQUFDLENBQUMsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5jb2RlIH0gZnJvbSBcInV1ZW5jb2RlXCI7XG5pbXBvcnQge3Byb21pc2VzIGFzIGZzcH0gZnJvbSBcImZzXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVuY29kZV9maWxlKGZuOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0ZXh0ID0gYXdhaXQgZnNwLnJlYWRGaWxlKGZuKVxuICByZXR1cm4gZW5jb2RlKHRleHQpXG59XG4oYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhhd2FpdCBlbmNvZGVfZmlsZShwcm9jZXNzLmFyZ3ZbMl0pKVxufSkoKVxuXG4iXX0=