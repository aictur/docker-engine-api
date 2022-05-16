import Docker, { DockerConnection } from "./index";

const con = new DockerConnection();
const DockerInstance = new Docker(con);
DockerInstance.ps().then(console.log).catch(console.log);
