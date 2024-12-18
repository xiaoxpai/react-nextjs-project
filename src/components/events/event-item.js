import Link from "next/link";

export default function EventItem(props) {

    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('zh-CN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li>
            <div>
                <img src={'/' + image} alt={title}/>
                <div>
                    <div>
                        <h2>{title}</h2>
                    </div>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                    <div>
                        <Link href={exploreLink}>Explore Event</Link>
                    </div>
                </div>
            </div>
        </li>

    );
}