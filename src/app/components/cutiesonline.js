import React, {Component} from 'react';
import createReactClass from 'create-react-class';

var CutiesOnline = createReactClass({
  render: function() {
    var webringThing = `
    <table border="0" cellpadding="2" cellspacing="0" style="border:2px solid #8258AC;margin:0px auto;font:normal 12px Hack,Menlo,Monaco,'Courier New',Courier,monospace;background:#7446a2 none;color:#ffffff;">
    <thead>
        <tr>
        <th style="text-align:left;font-size:15px;background:#532a7d none;">Cuties Online</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td style="text-align:center;background-color:#7446A2;">
            <a href="http://cuties.online/?Go&amp;Prev&amp;26" style="color:#eeeeee;" target="_top">Previous</a> |
            <a href="http://cuties.online/" style="color:#eeeeee;" target="_top">Home</a> |
            <a href="http://cuties.online/?Join" style="color:#eeeeee;" target="_top">Join</a> |
            <a href="http://cuties.online/?Go&amp;Rand&amp;26" style="color:#eeeeee;" target="_top">Random</a> |
            <a href="http://cuties.online/?Go&amp;Next&amp;26" style="color:#eeeeee;" target="_top">Next</a>
        </td>
        </tr>
    </tbody>
    </table>
  `;
    return (
        <div id="cuties" dangerouslySetInnerHTML={{__html: webringThing}} />
    )
  }
});

export default CutiesOnline;