import React, { PureComponent, Fragment } from 'react';
import { connect, injectIntl } from 'umi';


class MyComponent extends React.Component {
  render() {
    const { currentUser } = this.props; // oder this.state, falls es im Zustand gespeichert ist
    return (
      <div>
        <p>Aktueller Benutzer: {currentUser.username}</p> {/* Beispiel für die Ausgabe des Namens */}
      </div>
    );
  }
}
