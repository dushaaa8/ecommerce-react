import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({classes}) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className={`flex items-center gap-2 text-sm py-4 ${classes}`}>
            <Link to="/" className="text-neutral-04 hover:text-neutral-07 transition-colors">
                Home
            </Link>

            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                    <div key={to} className="flex items-center gap-2">
                        <span className="text-neutral-04">{">"}</span>
                        {last ? (
                            <span className="text-neutral-07 font-medium capitalize">
                                {value.replace(/-/g, ' ')}
                            </span>
                        ) : (
                            <Link to={to} className="text-neutral-04 hover:text-neutral-07 transition-colors capitalize">
                                {value.replace(/-/g, ' ')}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default Breadcrumbs