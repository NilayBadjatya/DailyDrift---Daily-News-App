import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    category: "business",
  };

  static propTypes = {
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - DailyDrift`;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=6&page=1`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      source: this.state.publishedAt,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handleNextClick = async () => {
    this.props.setProgress(10);
    let url = `
https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${
      this.props.apiKey
    }&pageSize=6&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
    this.props.setProgress(100);
  };

  handlePrevClick = async () => {
    this.props.setProgress(10);

    let url = `
https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=${
      this.props.apiKey
    }&pageSize=6&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
    this.props.setProgress(100);
  };

  render() {
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{
            margin: "9px 0",
            marginTop: "110px",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>

        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    source={element.author}
                    sname={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 5)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
