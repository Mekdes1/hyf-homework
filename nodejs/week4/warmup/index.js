class Email {
  constructor(subject, body) {
    this.subject = subject;
    this.body = body;
  }
}

class SpamDetector {
  upperCaseCheck(emailBody) {
    const string = emailBody.body;
    const stringSplit = string.split("");
    const upperCaseArray = stringSplit.filter(item => {
      return item == item.toUpperCase();
    });

    const percentage = (upperCaseArray.length * 100) / stringSplit.length;

    if (percentage > 60) {
      return true;
    } else {
      return false;
    }
  }

  badWordCheck(emailBody) {
    const strings = emailBody.body;

    const stringsSplit = strings.split(" ");

    const badWords = ["viagra", "offer", "free", "business proposal"];

    const badWordsInEmail = stringsSplit.filter(item => {
        
      return badWords.includes(item.toLowerCase());

    });

    if (badWordsInEmail.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  subjectCheck(subject) {
    const emailSubject = subject.subject;

    if (emailSubject.toLowerCase() === "hello") {
      return true;
    } else {
      return false;
    }
  }

  isSpam(email) {
    if (
      this.badWordCheck(email) === true ||
      this.upperCaseCheck(email) === true ||
      this.subjectCheck(email) === true
    ) {
      return true;
    } else {
      return false;
    }
  }
}

const emailFromOldFriend = new Email("Hello old friend", "Long time no see , when should we hang out again??");
const emailFromCompany = new Email("Hello applicant", "Thank you for your application");
const spamEmail = new Email("Hello", "open this email");
const spamEmail2 = new Email("Hello customer", "we are giving free computers");
const spamEmail3 = new Email("Hello customer", "WE ARE GIVING COMPUTERS");

const spamDetector = new SpamDetector();

console.log(spamDetector.isSpam(emailFromOldFriend)); 
console.log(spamDetector.isSpam(emailFromCompany)); 
console.log(spamDetector.isSpam(spamEmail)); 
console.log(spamDetector.isSpam(spamEmail2)); 
console.log(spamDetector.isSpam(spamEmail3))