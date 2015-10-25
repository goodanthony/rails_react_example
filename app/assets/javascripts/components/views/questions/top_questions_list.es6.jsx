// Top Questions List
class TopQuestionsList extends React.Component {

  render () {

    const questions = this.props.questions.map(question=>{
      return (
        <li key={question.id} style={{borderBottom: '1px solid #CCC', paddingBottom: '10px', paddingTop: '20px'}}>
          <TopQuestionsListItem question={question} />
        </li>
      );
    });

    return (
      <div>
        <h3 style={{borderBottom: '1px solid #CCC', paddingBottom: '20px', marginBottom:'0px'}}>
          Top Questions
        </h3>
        <ul className="list-unstyled">{questions}</ul>
      </div>
    );
  }
}

TopQuestionsList.propTypes = {
  questions: React.PropTypes.array
};
//

// Top Questions List Item
class TopQuestionsListItem extends React.Component {

  render() {

    const question = this.props.question;

    return (
      <div>
        <ul className="list-inline text-center" style={{display:'inline-block'}}>
          <li style={{width: '60px'}}><p className="text-center">{question.votes}</p>vote</li>
          <li style={{width: '60px'}}><p className="text-center">1</p> answer</li>
          <li style={{width: '60px'}}><p className="text-center">{question.views}</p> view</li>
        </ul>
        <div style={{display: 'inline-block', verticalAlign:'top'}}>
          <a href={`/questions/${question.id}`}>{question.title}</a>
        </div>
      </div>
    );
  }
};

TopQuestionsListItem.propTypes = {
  question: React.PropTypes.object.isRequired
};
