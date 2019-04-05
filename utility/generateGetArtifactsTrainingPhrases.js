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
  constructor() {
    this.suffixTypes = [new TeamSuffix(), new AuthorSuffix(), new DateSuffix(), new TagSuffix()];
  }

  generateAllPhrases() {
    this.allSuffixes = [];
    this.suffixTypes[0].generateStrings().forEach(
      string1 => this.suffixTypes[1].generateStrings().forEach(
        string2 => this.suffixTypes[2].generateStrings().forEach(
          string3 => this.suffixTypes[3].generateStrings().forEach(
            string4 => this.allSuffixes.push(string1 + string2 + string3 + string4),
          ),
        ),
      ),
    );
    return this.allSuffixes;
  }
}

class PhraseGenerator {
  constructor() {
    this.prefixGen = new PrefixGenerator();
    this.suffixGen = new SuffixGenerator();
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


const gen = new PhraseGenerator();
fs.writeFile('./Agent/intents/Get Artifacts_usersays_en.json', gen.makePhrases(), (err) => {
  if (err) { console.error(err); }
});
