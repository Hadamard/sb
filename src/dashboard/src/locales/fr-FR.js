/*
 SPDX-License-Identifier: Apache-2.0
*/
import exception from './fr-FR/exception';
import globalHeader from './fr-FR/globalHeader';
import login from './fr-FR/login';
import menu from './fr-FR/menu';
import pwa from './fr-FR/pwa';
import component from './fr-FR/component';
import Organization from './fr-FR/Organization';
import User from './fr-FR/operatorUser';
import form from './fr-FR/form';
import Agent from './fr-FR/Agent';
import Node from './fr-FR/Node';
import fabricCa from './fr-FR/fabric/ca';
import Network from './fr-FR/Network';
import Channel from './fr-FR/Channel';
import ChainCode from './fr-FR/Chaincode';

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
