//Do not alter the starter code.
function main() {
    //Create your Message Class here with all the properties and methods
  
    class Message{
        static totalMessages=0
        static status=false
        constructor(sender,receiver,messageContent){
            this.sender=sender
            this.receiver=receiver
            this.messageContent=messageContent
        }
        static recordMessage(){
            Message.totalMessages+=1
        }
        static changeStatus(){
            Message.status=!Message.status
            if (Message.status){
               console.log('the status has been changed to online') 
            }
            else{
               console.log('the status has been changed to offline') 
            }
        }
        sendMessage(){
            console.log(`The message '${this.messageContent}' has been sent from '${this.sender}'
                          to
                          '${this.receiver}'`)
            Message.recordMessage()
        }
        displayDetails(){
            console.log(`Sender: ${this.sender}
                         Receiver: ${this.receiver}
                         Message: ${this.messageContent}
                         Status: ${Message.status}
                         Total Messages: ${Message.totalMessages}`)
        }
    }
    return Message;
  }
  