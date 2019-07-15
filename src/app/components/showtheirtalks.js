import React, {Component} from 'react';
import Router from 'react-router';
import Things from './things.js';
import EffyPhoto from './effyphoto.js';

class ShowTheirTalks extends Component {
  render() {
    let talks = [
      {
        name: '23 July - XConf Sydney',
        description: 'Doing Infrastructure as Code? You Can Do Better',
        link: 'https://www.thoughtworks.com/xconf-au-2019',
      },
      {
        name: '25 July - XConf Melbourne',
        description: 'Doing Infrastructure as Code? You Can Do Better',
        link: 'https://www.thoughtworks.com/xconf-au-2019',
      },
      {
        name: '10 August - DDD Melbourne',
        description: 'False Assumptions Developers Make About Gender (and their sometimes hilarious results)',
        link: 'https://www.dddmelbourne.com',
      },
      {
        name: '29 August - ServerlessDays Melbourne',
        description: "Let's use all the clouds!",
        link: 'https://serverlessdays.me',
      },
      {
        name: '18 October - NDC Sydney',
        description: "Doing Infrastructure as Code? You Can Do Better",
        link: 'https://serverlessdays.me',
      }
    ];
    return (
      <div>
        <div className="row" id="body">
          <Things title="Come and hear me speak!">
            <Things things={talks} />
          </Things>
        </div>
      </div>
    )
  }
}

export default ShowTheirTalks;
