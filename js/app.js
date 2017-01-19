var my_news = [
  {
      author: 'Jorah Mormon',
      text: 'We are hackers...',
      bigText: 'We are hackers - motherfuckers!'
  },
  {
      author: 'MATT DAIMON',
      text: 'The best price for cola bottle is...',
      bigText: 'The best price for cola bottle is 25 soviet kopecks, you ugly stupid american bastards'
  },
  {
      author: 'Nobody',
      text: 'FREE download! No registration needed get it here...',
      bigText: 'Nah, forget it'
  }
];

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        content: React.PropTypes.string.isRequired,
        full_content : React.PropTypes.string.isRequired
        })
    },

    render : function (){
        var id = this.props.id;
        var author = this.props.author;
        var content = this.props.content;
        var full_content = this.props.full;

        return (
            <div className='article'>
                <p className='news__author'>{author}:</p>
                <p className='news__text'>{content}</p>
                <p className='news__big-text'>{full_content}</p>
            </div>
        );
    }
})

var News = React.createClass({
    
    propTypes: {
    data: React.PropTypes.array.isRequired
    },

    render: function() {
        var data = this.props.data;
        var newsTemplate = data.length > 0 ? data.map(function(item, index) {
            return (<Article id={index} author={item.author} content={item.text} full_content={item.bigText}/>) 
     }):
    <div key="0"><p className="jews_entry">Jews pizdyk</p></div>;

return (
  <div className="jews">
    {newsTemplate}
    <strong className={data.length > 0 ? 'news__count':'none'}>Total jews: {data.length}</strong>
  </div>
    );
}
});


var App = React.createClass({
    render: function() {
        return (
          <div className="app">
            <h2>Hullo, me est news componentum</h2>
            <News data={my_news} />
          </div>
      );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);