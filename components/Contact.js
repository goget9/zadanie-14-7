var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div>
        <div className={'column'}>
          <img className="contactImage" src="http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico"/>
        </div>
        <div className={'column'}>
          <p className={'contactLabel'}>
            Name: {this.props.item.firstName}
          </p>
          <p className={'contactLabel'}>
            Last Name: {this.props.item.lastName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
      </div>
    );
  }
});
