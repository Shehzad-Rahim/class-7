
const Home = () => {
  return (
    <div>
        <h1 className="text-2xl text-center m-2 font-bold">Custom Css Grid</h1>
        <div className="container">
            <div className="items item-1"><h1>AG1</h1>
            </div>
            <div className=" item-2-container">
              <div className="item-2 items"><h1>AG2</h1></div>
                <div className="nested-4-5">
                <div className="items item-4"><h1>AG4</h1></div>
                <div className="items item-5"><h1>AG5</h1></div>
                </div>

                <div className="items item-6"><h1>AG4</h1></div>

                <div className=" item-7-container">
                  <div className="item-7 items"><h1>AG4</h1></div>
                    <div className="items item-8">AG8</div>
                    <div className="items item-9">AG9</div>
                    <div className="items item-10"><h1>AG10</h1></div>
                </div>
            </div>

            <div className="items item-3">AG3</div>
        </div>
    </div>
  )
}

export default Home
