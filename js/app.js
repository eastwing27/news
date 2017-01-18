var my_news = [
      {
          author: 'Jorah Mormon',
          text: 'We are hackers - motherfuckers!'
      },
  {
      author: 'MATT DAIMON',
      text: 'The best price for cola bottle is 25 kopeykas'
  },
  {
      author: 'Nobody',
      text: 'FREE download! No registration needed! - http://localhost:3000'
  }
];

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.length > 0 ? data.map(function(item, index) {
            return (
              <div key={index}>
              <p className="jews_entry"><b>{item.author}:</b> {item.text}</p>
            </div>
        ) 
     }):
    <div key="0"><p className="jews_entry">Jews pizdyk</p></div>;

return (
  <div className="jews">
    {newsTemplate}
    <strong className={data.length > 0 ? '':'none'}>Total jews: {data.length}</strong>
  </div>
    );
}
});

var Comments = React.createClass({
    render: function() {
        return(
                <div className="comments">
                    News pizdyk - comments pizdyk
                </div>
            )
    }
})

var App = React.createClass({
    render: function() {
        return (
          <div className="app">
            Hullo, me est news componentum
            <News data={my_news} />
            <Comments />
          </div>
      );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);