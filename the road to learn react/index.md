

class App extends Component {
    render() {
        <div className="App">
            {list.map(function(item) {
                return (
                <div key={item.objectID}>
                <span>
                <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                </div>
                );
            })}
        </div>
    }
}

export default App;


