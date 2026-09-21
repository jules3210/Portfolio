function Badge({ name, icon: Icon }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--bg-secondary) px-3 py-1.5 text-sm font-medium">
            {Icon && <Icon className="text-sm text-(--accent)" />}
            <span>{name}</span>
        </span>
    );
}

export default Badge;
