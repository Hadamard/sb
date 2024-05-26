import React, { PureComponent } from 'react';
import { injectIntl, setLocale, getLocale } from 'umi';
import { Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const { className, intl } = this.props;
    const selectedLang = getLocale();
    const locales = ['zh-CN', 'en-US', 'de-DE', 'fr-FR'];
    const languageLabels = {
      'zh-CN': '简体中文',
      'en-US': 'English',
      'de-DE': 'Deutsch',
      'fr-FR': 'Français',
    };
    const languageIcons = {
      'zh-CN': '🇨🇳',
      'en-US': '🇬🇧',
      'de-DE': '🇩🇪 ',
      'fr-FR': '🇫🇷 ',
    };
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={this.changeLang}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <GlobalOutlined title={intl.formatMessage({ id: 'navBar.lang' })} />
        </span>
      </HeaderDropdown>
    );
  }
}

export default injectIntl(SelectLang);
