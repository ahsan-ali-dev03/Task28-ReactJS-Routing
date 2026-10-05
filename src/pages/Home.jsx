function Home() {
  return (
    <div className="blog-layout">

      {/* Main Blog Content */}
      <main className="main-content">

        <article className="featured-post">

          <img
            className="featured-image"
            src="https://picsum.photos/900/500?random=10"
            alt="Featured post"
          />

          <div className="post-content">

            <h1>TITLE HEADING</h1>

            <p className="post-date">
              Title description, April 7, 2014
            </p>

            <p>
              Mauris neque quam, fermentum nec lobortis nec, sollicitudin
              non sem. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium.
            </p>

            <div className="post-footer">
              <button>READ MORE »</button>

              <span>
                Comments <b>0</b>
              </span>
            </div>

          </div>

        </article>

      </main>


      {/* Right Sidebar */}
      <aside className="sidebar">

        {/* My Name */}
        <div className="profile-card">

          <img
            src="https://picsum.photos/300/220?random=20"
            alt="Profile"
          />

          <h3>My Name</h3>

          <p>
            Just me, myself and I, exploring the universe of unknown.
            I have a heart of love and a sense of humor.
          </p>

        </div>


        {/* Popular Posts */}
        <div className="sidebar-card">

          <h3>Popular Posts</h3>

          <div className="popular-post">

            <img
              src="https://picsum.photos/60/50?random=1"
              alt="Post"
            />

            <div>
              <strong>Lorem</strong>
              <small>Simple text name</small>
            </div>

          </div>


          <div className="popular-post">

            <img
              src="https://picsum.photos/60/50?random=2"
              alt="Post"
            />

            <div>
              <strong>Ipsum</strong>
              <small>Famous text</small>
            </div>

          </div>


          <div className="popular-post">

            <img
              src="https://picsum.photos/60/50?random=3"
              alt="Post"
            />

            <div>
              <strong>Dolorum</strong>
              <small>Welcome page</small>
            </div>

          </div>


          <div className="popular-post">

            <img
              src="https://picsum.photos/60/50?random=4"
              alt="Post"
            />

            <div>
              <strong>Utmagna</strong>
              <small>Lorem ipsum</small>
            </div>

          </div>

        </div>


        {/* Tags */}
        <div className="sidebar-card">

          <h3>Tags</h3>

          <div className="tags">
            <span>Travel</span>
            <span>New York</span>
            <span>London</span>
            <span>Ideas</span>
            <span>News</span>
            <span>Family</span>
            <span>Photos</span>
            <span>Sports</span>
            <span>Design</span>
            <span>Friends</span>
          </div>

        </div>

      </aside>

    </div>
  );
}

export default Home;