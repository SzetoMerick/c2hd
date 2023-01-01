import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<NavLink className="navbar-brand" to="/">
							CarCar
						</NavLink>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<NavLink className="nav-link active" aria-current="page" to="">
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" aria-current="page" to="/scp">
										SalesPersonForm
									</NavLink>
								</li>
							</ul>
							<form className="d-flex">
								<input
									className="form-control me-2"
									type="search"
									placeholder="Search conferences"
									aria-label="Search"
								></input>
								<button className="btn btn-outline-success me-2" type="submit">
									Search
								</button>
								<NavLink className="btn btn-primary" to="/conferences/new">
									Attend!
								</NavLink>
							</form>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Nav;
