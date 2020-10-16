let store = []

  const List = () => {
    data.map((e) => {
      store.push(
        <div key={e.lat}>
        {/* <div>{e.name}</div> */}
          <Popup
            onClick={handleChange}
            trigger={
              <div className="scrollbar">
                <div>
                  <button
                    type="button"
                    className="btn btn-warning star"
                    value={e.name}
                    onClick={() => del(e.name)}
                  >
                    <BsFillStarFill /> Remove
                  </button>
                  {e.name} {e.temp}°C <Icon icon={e.iconId} />{" "}
                </div>
              </div>
            }
            position="left center"
          >
            <div id={e.iconId} key={e.name}>
              <div
                key={e.iconId}
                value={e.iconId}
                style={{ backgroundImage: `url(${props.flag})` }}
              >
                {e.name}
              </div>
            </div>
          </Popup>
        </div>
      )
    })
     return(
      <div >
        <Delay wait={4000}>
         {store} 
        </Delay>
      </div>
    )
  }