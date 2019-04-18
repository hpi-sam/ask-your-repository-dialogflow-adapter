const fs = require('fs');
const uuidv1 = require('uuid/v1');

class TeamSuffix {
  constructor() {
    this.phrases = [' from team ', ' from the team '];
  }


  generateStrings() {
    return this.phrases.map(x => (`
    {
        "text": "${x}",
        "userDefined": false
      },
      {
        "text": "Team",
        "alias": "Team",
        "meta": "@Team",
        "userDefined": true
      },`)).concat(['']);
  }
}
class AuthorSuffix {
  constructor() {
    this.phrases = [' by ', ' uploaded by '];
  }

  generateStrings() {
    return this.phrases.map(x => (`
    {
        "text": "${x}",
        "userDefined": false
      },
      {
        "text": "Arne",
        "alias": "Author",
        "meta": "@Author",
        "userDefined": false
      },`)).concat(['']);
  }
}
class TagSuffix {
  constructor() {
    this.phrases = [' tagged with ', ' about ', ' tagged ', ' with tags ', ' with the tags '];
  }

  generateStrings() {
    return this.phrases.map(x => (`
    {
        "text": "${x}",
        "userDefined": false
      },
      {
        "text": "tags",
        "alias": "Tag",
        "meta": "@sys.any",
        "userDefined": true
      },`)).concat(['']);
  }
}
class DateSuffix {
  constructor() {
    this.phrases = [' from ', ' uploaded ', ' saved ', ' from the '];
  }

  generateStrings() {
    return this.phrases.map(x => (`
    {
        "text": "${x}",
        "userDefined": false
      },
      {
        "text": "3 days ago",
        "alias": "DatePeriod",
        "meta": "@sys.date-period",
        "userDefined": true
      },`)).concat(['']);
  }
}

class PrefixGenerator {
  constructor() {
    this.prefixes = ['Get me an image', 'I need an image', 'Show me an image'];
  }

  generateStrings() {
    return this.prefixes.map(x => (`,
    "data": [
      {
        "text": "${x}",
        "userDefined": false
      },`));
  }
}

class SuffixGenerator {
  constructor(suffixTypes) {
    this.suffixTypes = suffixTypes;
  }

  generateAllPhrases() {
    this.allSuffixes = [""];
    this.suffixTypes.forEach((newSuffixType) => {
      let temp = new Array;
      this.allSuffixes.forEach((oldSuffix) => {
        newSuffixType.generateStrings().forEach((newSuffix) => {
          temp.push(oldSuffix + newSuffix);
        })
      })
      this.allSuffixes = temp;
    });
    return this.allSuffixes;
  }
}

class PhraseGenerator {
  constructor(suffixTypes) {
    this.prefixGen = new PrefixGenerator();
    this.suffixGen = new SuffixGenerator(suffixTypes);
  }

  makePhrases() {
    this.ret = [];
    this.i = 0;
    this.suffixGen.generateAllPhrases().forEach(
      suffix => this.prefixGen.generateStrings().forEach(
        (prefix) => {
          this.ret.push(`{
    "id": "${uuidv1()}"${prefix}${suffix}
  ],
  "isTemplate": false,
  "count": 0,
  "updated": ${Date.now()}
}`);
          this.i += 1;
        },
      ),
    );
    console.log(`${this.i} training phrases were generated.`);

    return `[
      ${this.ret}
      ]`;
  }
}


let gen = new PhraseGenerator([new TeamSuffix(), new AuthorSuffix(), new DateSuffix(), new TagSuffix()]);
fs.writeFile('./Agent/intents/Get Artifacts No Team Selected_usersays_en.json', gen.makePhrases(), (err) => {
  if (err) { console.error(err); }
});

gen = new PhraseGenerator([new AuthorSuffix(), new DateSuffix(), new TagSuffix()]);
fs.writeFile('./Agent/intents/Get Artifacts_usersays_en.json', gen.makePhrases(), (err) => {
  if (err) { console.error(err); }
});