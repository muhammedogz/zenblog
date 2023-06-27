export type Post = {
    slug: string;
    title: string;
    content: any;
};
export type PostWithContent = Post & {
    content: string;
};
export type CreateClientOpts = {
    blogId: string;
};
export declare function createClient({ blogId }: CreateClientOpts): {
    posts: {
        getAll: () => Promise<Post[]>;
        getBySlug: (slug: string) => Promise<PostWithContent>;
    };
};
//# sourceMappingURL=index.d.ts.map