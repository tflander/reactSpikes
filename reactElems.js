'use strict';


var data = [{"name":"Commited Batch Id","value":"1-C","level":"GREEN","timestamp":"Mar 8, 2016 5:30:20 PM"},{"name":"Incremental Base Batch Id","value":"1-C","level":"DEFAULT","timestamp":"Mar 8, 2016 5:30:20 PM"},{"name":"Current Batch Id","value":"1-C","level":"DEFAULT","timestamp":"Mar 8, 2016 5:30:05 PM"},{"name":"Current Runtime Batch Id","value":"1-C","level":"GREEN","timestamp":"Mar 8, 2016 5:30:20 PM"},{"name":"Restart Batch Id","value":"1-C","level":"DEFAULT","timestamp":"Mar 8, 2016 5:30:20 PM"},{"name":"Last Batch Id","value":"1","level":"DEFAULT","timestamp":"Mar 8, 2016 5:27:33 PM"},{"name":"Check Index","value":"On","level":"DEFAULT","timestamp":"Mar 8, 2016 5:26:38 PM"},{"name":"Copy feeds on failed batch","value":"Off","level":"DEFAULT"},{"name":"poller.main.dummyContentFeed.enabled","value":"false","level":"DEFAULT","timestamp":"Mar 11, 2016 9:31:49 AM"}]

var StatusItemTimeStamp = React.createClass({
  render: function() {
    if(this.props.data.timestamp) {    
      return (
        <td key={this.props.data.name}>
    	     {this.props.data.timestamp}
        </td>
      );
    } else {return(<td></td>);}
  }
});

var DashBoardDataDir = React.createClass({
  render: function() {
    var statusItems = this.props.data.map(function(statusItem) {
      var iconClass = statusItem.level + "-ICON";
      return (
        <tr key={statusItem.name}  className={statusItem.level}>
          <td className={iconClass}>{statusItem.name}</td>
          <td>{statusItem.value}</td>
          <StatusItemTimeStamp data={statusItem} />          
        </tr>
      );
    });
    return (
      <table className="dashboardAccordion">
        <tbody>
        {statusItems}
        </tbody>
      </table>
    );
  }
});
    
  ReactDOM.render(
   <DashBoardDataDir data={data} />,
    document.getElementById('content')
  );
