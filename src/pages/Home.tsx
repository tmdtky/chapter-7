import React, { useEffect, useState } from "react";
import classes from "../styles/Home.module.scss"
import { Link } from "react-router-dom";
import { API_BASE_URL } from '../constants';
import { Post, PostsResponse } from '../types';

export const Home = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	// APIでpostsを処理
	useEffect(() => {
		const fetcher = async (): Promise<void> => {
			try {
				const res = await fetch(`${API_BASE_URL}/posts`);
				const data: PostsResponse = await res.json();
				setPosts(data.posts);
			} catch (error) {
				console.log('記事の取得に失敗しました:', error);
			}
		};

		fetcher();
	}, []);

	return (
		<div className="">
			<div className={classes.container}>
				<ul>
					{posts.map((post: Post) => {
						return (
							<li key={post.id} className={classes.list}>
								<Link to={`/posts/${post.id}`} className={classes.link}>
									<div className={classes.post}>
										<div className={classes.postContent}>
											<div className={classes.postInfo}>
												<div className={classes.postDate}>
													{new Date(post.createdAt).toLocaleDateString()}
												</div>
												<div className={classes.postCategories}>
													{post.categories.map((category: string) => {
														return (
															<div
																key={category}
																className={classes.postCategory}
															>
																{category}
															</div>
														);
													})}
												</div>
											</div>
											<p className={classes.postTitle}>{post.title}</p>
											<div className={classes.postBody} dangerouslySetInnerHTML={{ __html: post.content }}>
											</div>
										</div>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};