import React from 'react'

export default class CatList extends React.Component {

  render() {
    const listOfCats = this.props.catPics.map(pic => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img alt="cat" src={pic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
          </div>
        </div>
      )
    })
    return (
      <div>
        {listOfCats}
      </div>
    )
  }
}
