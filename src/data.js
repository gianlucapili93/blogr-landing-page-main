const data = {
    navbar : [
        {   
            id: 'nav1',
            name: 'Product',
            list: ['Overview','Pricing','Marketplace','Overview','Integrations'],
        },
        {
            id: 'nav2',
            name: 'Company',
            list: ['About','Team','Blog','Careers'],
        },
        {
            id: 'nav3',
            name: 'Connect',
            list: ['Contact','Newsletter','LinkedIn'],
        }
    ],
    section1 : [{
        id: 1,
        title : 'Designed for the future',
        image: 'illustration',
        subsection : [
            {
                id: 'a1',
                subtitle: 'Introducing an extensible editor',
                paragraph: `Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.`,
            },
            {
                id: 'a2',
                subtitle: 'Robust content management',
                paragraph: `Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                    by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`,
            },
        ],
    }],
    section2 : [{
        id: 2,
        title: 'State of the Art Infrastructure',
        paragraph: `With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.`,
    }],
    section3 : [{
        id: 3,
        image: 'computer',
        subsection : [
            {
                id: 'c1',
                subtitle: 'Free, open, simple',
                paragraph: `Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.`,
            },
            {
                id: 'c2',
                subtitle: 'Powerful tooling',
                paragraph: `Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.`,
            },
        ],
    }],
    footer : [
        {
            id: 1,
            title: 'Product',
            list: ['Overview','Pricing','Marketplace','Features','Integrations'],
        },
        {
            id: 2,
            title: 'Company',
            list: ['About','Team','Blog','Careers'],
        },
        {
            id: 3,
            title: 'Connect',
            list: ['Contact','Newsletter','LinkedIn'],
        },
    ]
};

export default data;