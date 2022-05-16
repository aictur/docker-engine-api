import DockerModem from "docker-modem";

import Docker from "./Docker";
import DockerConnection from "./DockerConnection";

export default Docker;

const con = new DockerConnection();
const DockerInstance = new Docker(con);
DockerInstance.ps().then(console.log).catch(console.log);
