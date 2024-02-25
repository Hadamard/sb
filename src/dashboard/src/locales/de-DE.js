/*
 SPDX-License-Identifier: Apache-2.0
*/
import exception from './de-DE/exception';
import globalHeader from './de-DE/globalHeader';
import login from './de-DE/login';
import menu from './de-DE/menu';
import pwa from './de-DE/pwa';
import component from './de-DE/component';
import Organization from './de-DE/Organization';
import User from './de-DE/operatorUser';
import form from './de-DE/form';
import Agent from './de-DE/Agent';
import Node from './de-DE/Node';
import fabricCa from './de-DE/fabric/ca';
import Network from './de-DE/Network';
import Channel from './de-DE/Channel';
import ChainCode from './de-DE/Chaincode';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.home.introduce': 'introduce',
  'app.forms.basic.title': 'Basic form',
  'app.forms.basic.description':
    'Form pages are used to collect or verify information to users, and basic forms are common in scenarios where there are fewer data items.',
  ...exception,
  ...globalHeader,
  ...login,
  ...menu,
  ...pwa,
  ...component,
  ...Organization,
  ...Agent,
  ...User,
  ...form,
  ...Node,
  ...fabricCa,
  ...Network,
  ...Channel,
  ...ChainCode,
};
