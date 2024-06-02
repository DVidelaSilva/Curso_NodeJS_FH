import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { Attachment } from 'nodemailer/lib/mailer';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entities';

interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachement[];
}

interface Attachement {
    filename: string;
    path: string;
}


export class EmailService {

    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor(){}


    async sendEmail(options: SendMailOptions):Promise<boolean>{

        const {to, subject, htmlBody, attachements = []} = options;

        try{

            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements,
            })

            return true
        } catch (error) {

            return false;
        }
    }


    async sendEmailWithFilesSystemLogs( to: string | string[]) {
        const subject = 'Logs del servidor'
        const htmlBody = `
        <h3>Logs de sistema NOC</h3>
        <p>Prueba mailer NOC app</p>
        <p>Ver logs adjuntos</p>
    `;

    const attachements: Attachement[] = [
        {
            filename: 'logs-all.log',
            path: './logs/logs-all.log'
        },
        {
            filename: 'logs-medium.log',
            path: './logs/logs-medium.log'
        },
        {
            filename: 'logs-high.log',
            path: './logs/logs-high.log'
        }
    ];

    return this.sendEmail({
        to, subject, attachements, htmlBody
    });

    }
}