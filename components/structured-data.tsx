
interface ArticleStructuredDataProps {
    title: string;
    description: string;
    author: string;
    publishedDate: string;
    modifiedDate: string;
    image?: string;
}

export function ArticleStructuredData({
    title,
    description,
    author,
    publishedDate,
    modifiedDate,
    image,
}: ArticleStructuredDataProps) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        author: {
            "@type": "Person",
            name: author,
        },
        publisher: {
            "@type": "Organization",
            name: "EXIM Corporation",
            logo: {
                "@type": "ImageObject",
                url: "https://eximcpl.com/exim-logo.png",
            },
        },
        datePublished: publishedDate,
        dateModified: modifiedDate,
        image: image || "https://eximcpl.com/exim-logo.png",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

export function OrganizationStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EXIM Corporation",
        "url": "https://eximcpl.com",
        "logo": "https://eximcpl.com/exim-logo.png",
        "sameAs": [
            "https://web.facebook.com/profile.php?id=61587158443685",
            "https://www.linkedin.com/company/exim-corporation1",
            "https://www.instagram.com/exim_corporation/"
        ],
        "description": "Diversified Sri Lankan enterprise specializing in industrial manufacturing, global sourcing, and strategic supply solutions across the Indian Ocean region.",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
