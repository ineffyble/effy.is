import React, {Component} from 'react';
import Router from 'react-router';
import Things from './things.js';
import EffyPhoto from './effyphoto.js';

class ShowTheirTalks extends Component {
  render() {
    let talks = [
      {
        name: '23 July 2019 - XConf Sydney',
        description: 'Doing Infrastructure as Code? You Can Do Better',
        link: 'https://www.thoughtworks.com/xconf-au-2019',
        done: true,
        recording: 'https://www.youtube.com/watch?v=NgwosUBuRAc&list=PLdKweAt9bypV02eTe0sBWWURqd5EbBs1i&index=2'
      },
      {
        name: '25 July 2019 - XConf Melbourne',
        description: 'Doing Infrastructure as Code? You Can Do Better',
        link: 'https://www.thoughtworks.com/xconf-au-2019',
        done: true,
      },
      {
        name: '10 August 2019 - DDD Melbourne',
        description: 'False Assumptions Developers Make About Gender (and their sometimes hilarious results)',
        link: 'https://www.dddmelbourne.com',
        done: true,
      },
      {
        name: '29 August 2019 - ServerlessDays Melbourne',
        description: "Let's use all the clouds!",
        link: 'https://serverlessdays.me',
        done: true, 
        recording: 'https://www.youtube.com/watch?v=FV5ZDsueWMo&list=PLdKweAt9bypV02eTe0sBWWURqd5EbBs1i'
      },
      {
        name: '18 October 2019 - NDC Sydney',
        description: "Doing Infrastructure as Code? You Can Do Better",
        link: 'https://ndcsydney.com',
        done: true,
      },
      {
        name: '18 October 2019 - PubConf',
        description: 'effy_pubconf_talk-FINAL-FINAL(2)(Use This One)',
        link: 'https://pubconf.io',
        done: true,
      },
      {
        name: '9 November 2019 - DevFest Melbourne',
        description: 'False Assumptions Developers Make About Gender (and their sometimes hilarious results)',
        link: 'https://www.gdgmelbourne.com/devfest',
        done: true,
        recording: 'https://www.youtube.com/watch?v=-mVdb918514&list=PLdKweAt9bypV02eTe0sBWWURqd5EbBs1i'
      },
      {
        name: '14 September 2021 - XConf Australia',
        description: 'Trust teams but verify: Compliance as code done right',
        link: 'https://www.thoughtworks.com/xconf-au'
      },
      {
        name: '15 September 2021 - YOW! September',
        description: 'Trust teams but verify: Compliance as code done right',
        link: 'https://skillsmatter.com/conferences/13368-yow-sept-2021'
      },
    ];
    return (
      <div>
        <div className="row" id="body">
          <Things title="Come and hear me speak!">
            <Things things={talks.map(t => t.done ? { name: t.name, description: `<s>${t.description}</s>`, link: t.recording ? t.recording : '#' } : t)} />
          </Things>
        </div>
      </div>
    )
  }
}

export default ShowTheirTalks;
