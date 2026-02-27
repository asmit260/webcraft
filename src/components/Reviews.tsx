const reviews = [
    {
        name: 'Arjun Sharma',
        company: 'TechNova Pvt. Ltd.',
        initials: 'AS',
        rating: 5,
        text: "WebCraft delivered our SaaS dashboard in record time without cutting corners on quality. The attention to detail in both the UX and the codebase was genuinely impressive. Highly recommended!",
        color: 'bg-violet-100 text-violet-700',
    },
    {
        name: 'Priya Mehta',
        company: 'GreenLeaf Organics',
        initials: 'PM',
        rating: 5,
        text: "Our e-commerce site was redesigned from scratch by the WebCraft team and it shows — conversions jumped 40% in the first month. They truly understood our brand without us having to over-explain.",
        color: 'bg-emerald-100 text-emerald-700',
    },
    {
        name: 'Daniel Torres',
        company: 'Orbit Fintech',
        initials: 'DT',
        rating: 5,
        text: "End-to-end execution was flawless. From the initial wireframes to production deployment, every milestone was hit on time. The team is professional, communicative, and technically top-notch.",
        color: 'bg-sky-100 text-sky-700',
    },
    {
        name: 'Sara Okonkwo',
        company: 'Luminae Studios',
        initials: 'SO',
        rating: 5,
        text: "I came with just a napkin sketch and left with a fully functional, beautiful web app. WebCraft turned our vague idea into a real product — and the ongoing support has been fantastic.",
        color: 'bg-rose-100 text-rose-700',
    },
    {
        name: 'Rohan Kapoor',
        company: 'Buildify Constructions',
        initials: 'RK',
        rating: 5,
        text: "We needed a corporate site that felt modern and trustworthy. WebCraft nailed the brief perfectly. The mobile experience is buttery smooth and the site loads incredibly fast.",
        color: 'bg-amber-100 text-amber-700',
    },
    {
        name: 'Emily Chen',
        company: 'Bloom HR Solutions',
        initials: 'EC',
        rating: 5,
        text: "Working with WebCraft felt like having an in-house team. They pushed back on ideas that wouldn't have worked and proposed better alternatives. That level of ownership is rare and invaluable.",
        color: 'bg-fuchsia-100 text-fuchsia-700',
    },
]

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.951 2.702c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69L9.05 2.927z" />
                </svg>
            ))}
        </div>
    )
}

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 relative z-10 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-black mb-4">
                        What Our <span>Clients Say</span>
                    </h2>
                    <p className="text-textMuted text-lg">
                        Don't just take our word for it — here's what the teams we've worked with have to say about WebCraft.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review) => (
                        <div
                            key={review.name}
                            className="bg-white border-2 border-black rounded-2xl p-6 shadow-sketch hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-4"
                        >
                            {/* Stars */}
                            <StarRating count={review.rating} />

                            {/* Review Text */}
                            <p className="text-textMuted text-sm leading-relaxed flex-1">
                                "{review.text}"
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-center gap-3 pt-2 border-t-2 border-black/5">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${review.color} border-2 border-black/10 shrink-0`}>
                                    {review.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-black text-sm">{review.name}</p>
                                    <p className="text-xs text-textMuted">{review.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
