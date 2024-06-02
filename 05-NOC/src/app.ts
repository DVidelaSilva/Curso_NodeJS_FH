import { Server } from './presentation/server'

const title : string = "DAVS - NOC APP";
console.log(title);

(async() => {
    main()
})();

function main() {
    Server.start();
}