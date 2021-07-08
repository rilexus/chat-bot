interface MongooseDocument {
    _id?: string;
}
interface MessageInterface extends MongooseDocument {
    value: string;
    userID: string;
    sentAt: string;
}
export { MessageInterface };
//# sourceMappingURL=Message.interface.d.ts.map