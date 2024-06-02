import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-services"
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasources } from "../infrastructure/datasources/file-system.datasource"
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl"
import { CronService } from "./cron/cron-service"
import { EmailService } from "./email/email.service";


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasources(),
);

const emailService = new EmailService();

export class Server {

    public static start(){

        console.log('Server started...')

        //Mandar EMAIL
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository,
        ).execute(
            ['dvidelasilva@gmail.com', 'davs.academy@gmail.com']
        )




/*         emailService.sendEmailWithFilesSystemLogs(
            ['dvidelasilva@gmail.com', 'davs.academy@gmail.com']
        ); */

//        CronService.createJob(
//            '*/5 * * * * *',
//            () => {
//                const url = 'https://google.com';
//                //const url = 'http://localhost:3000';
//                new CheckService(
//                    fileSystemLogRepository,
//                    () => console.log(`${ url } is OK`),
//                    (error) => console.log(error),
//                ).execute(url)
//            }
//        )
        //console.log(envs)
    }
}
