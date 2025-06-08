// High Lighted Card
function HighLightedProjectsCard({ onClick, image, title }) {
  return (
    <div className="aa-hl-card" onClick={onClick}>
      <div className="card">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}


// Work Experience Card
function WorkExperienceCard({company, role, image, date, isLast, isFirst }){
    const svgHeight = "130"; 
    const centerY = parseInt(svgHeight) / 2; 
    return(<div className="d-flex align-items-center">
        <svg
          height={svgHeight}
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          className="me-5"
        >
          {!isFirst && (
            <line
              x1="10"
              y1="0"
              x2="10"
              y2={centerY - 10}
              stroke="#EB5531"
              strokeWidth="2"
            />
          )}
          <circle r="10" cx="10" cy={centerY} fill="#EB5531" />
          {!isLast && (
            <line
              x1="10"
              y1={centerY + 10}
              x2="10"
              y2={svgHeight}
              stroke="#EB5531"
              strokeWidth="2"
            />
          )}
        </svg>
  
        <div className="row rounded-5 py-sm-3 aa-we-container">
          <div className="col-12 col-sm-7 d-flex align-items-center mt-2 mt-sm-0">
            <img src={image} alt={company} />
            <div className="ms-3">
              <h2 className="aa-fs-p-4 mb-0">{company}</h2>
              <p className="mb-0 text-muted aa-fs-p-5">{role}</p>
            </div>
          </div>
          <div className="col-12 col-sm-5 my-auto text-center text-sm-end mb-2">
            <div className="row g-0">
              <div className="col-3">

              </div>
              <div className="col-8">
<p className="text-muted aa-fs-p-5 my-auto">{date}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
}


// Project Card
function ProjectCard({
    onclick,
    image,
    title,
    category,
    year,
    projectOverview,
  }) {
    return (
      <div className="col-md-6 col-lg-4 mt-3">
        <div
          className="card rounded-5 "
          onClick={onclick}
        >
          <div className="card-body">
            <div className="position-relative d-flex align-items-end">
              <img src={image} className="w-100" alt={title} />
              <div className="aa-btn-arrows-con">
                
                <svg
                  viewBox="0 0 100 100"
                  className="position-absolute aa-btn-arrows-services"
                >
                  <path
                    d="
                M12.5 33.3
                L12.5 83.3
                Q12.5 100 0 100
                L100 100 100 0
                Q100 16.7 87.5 16.7
                L25 16.7
                Q12.5 16.7 12.5 33.3
                Z
                "
                    fill="#fff"
                  />
                </svg>
                <button className="aa-btn-arrows">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 95 95" fill="#fff">
<path d="M28.1977 47.2359H67.3257" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.3262 32.2344L67.3252 47.2334L52.9783 61.5804" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
              </div>
            </div>
            <p className="mt-3 mb-0 aa-fs-p-4">{category}</p>
            <h1 className="aa-fs-p-2 card-title mt-1 fw-bold">{title}</h1>
            <p className="card-text">{projectOverview}</p>
            {year && <p className="text-muted">Year: {year}</p>}
          </div>
        </div>
      </div>
    );
  }

  function ProjectViewMoreCard({
    onclick,
    image,
    title,
    category,
    year,
    projectOverview,
  }) {
    return (
      <div className="col-sm-6 col-lg-4 mt-3">
        <div
          className="card rounded-5 "
          onClick={onclick}
        >
          <div className="card-body">
            <div className="position-relative d-flex align-items-end">
              <img src={image} className="w-100" alt={title} />
              <div className="aa-btn-arrows-con">
                <svg
                  viewBox="0 0 100 100"
                  className="position-absolute aa-btn-arrows-services"
                >
                  <path
                    d="
                M12.5 33.3
                L12.5 83.3
                Q12.5 100 0 100
                L100 100 100 0
                Q100 16.7 87.5 16.7
                L25 16.7
                Q12.5 16.7 12.5 33.3
                Z
                "
                    fill="#fff"
                  />
                </svg>
                <button className="aa-btn-arrows">&rarr;</button>
              </div>
            </div>
            <p className="mt-3 aa-fs-p-4">{category}</p>
            <h1 className="aa-fs-p-2 card-title mt-3 fw-bold">{title}</h1>
            <p className="card-text">{projectOverview}</p>
            {year && <p className="text-muted">Year: {year}</p>}
          </div>
        </div>
      </div>
    );
  }

export { HighLightedProjectsCard, WorkExperienceCard, ProjectCard,ProjectViewMoreCard };
