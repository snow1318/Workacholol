import "./Category.css";
export default function Category() {
    return (
        <>
            <div className="category-container">
                <div className="category-card">
                    <img src="category1.jpg" alt="Category 1" />
                    <h3>Keyboards</h3>
                </div>
                <div className="category-card">
                    <img src="category2.jpg" alt="Category 2" />
                    <h3>Mouses</h3>
                </div>
                <div className="category-card">
                    <img src="category3.jpg" alt="Category 3" />
                    <h3> Headsets</h3>
                </div>
                <div className="category-card">
                    <img src="category4.jpg" alt="Category 4" />
                    <h3>Speakers</h3>
                </div>
                <div className="category-card">
                    <img src="category5.jpg" alt="Category 5" />
                    <h3> Monitors</h3>
                </div>
                <div className="category-card">
                    <img src="category6.jpg" alt="Category 6" />
                    <h3>Gaming Pads</h3>
                </div>
                <div className="category-card">
                    <img src="category7.jpg" alt="Category 7" />
                    <h3>Cursor Pads</h3>
                </div>
            </div>
        </>
    )

}