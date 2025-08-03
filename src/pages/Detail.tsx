// /src/pages/Detail.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../styles/Detail.module.scss';
import { API_BASE_URL } from '../constants';
import { Post, PostResponse, ParamsType } from '../types';

export const Detail = () => {
  // react-routerのuseParamsを使って、URLのパラメータ（記事ID）を取得
  const { id } = useParams<ParamsType>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  // データを模擬的にAPIから取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async (): Promise<void> => {
      if (!id) return;
      
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/posts/${id}`);
        const data: PostResponse = await res.json();
        setPost(data.post);
      } catch (error) {
        console.error('記事の取得に失敗しました:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetcher();
  }, [id]);

  // 記事取得中は、読み込み中であることを表示
  if (loading) {
    return <div>読み込み中...</div>;
  }

  // 記事が見つからなかった場合の表示
  if (!loading && !post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.post}>
        {/* サムネイル画像 */}
        {post?.thumbnailUrl && (
          <div className={classes.postImage}>
            <img src={post.thumbnailUrl} alt={post.title} />
          </div>
        )}
        
        <div className={classes.postContent}>
          {/* 記事情報（日付とカテゴリ） */}
          <div className={classes.postInfo}>
            <div className={classes.postDate}>
              {post && new Date(post.createdAt).toLocaleDateString()}
            </div>
            {post?.categories && post.categories.length > 0 && (
              <div className={classes.postCategories}>
                {post.categories.map((category: string) => {
                  return (
                    <div key={category} className={classes.postCategory}>
                      {category}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* 記事タイトル */}
          <h1 className={classes.postTitle}>{post?.title}</h1>
          
          {/* 記事本文 */}
          {post?.content && (
            <div
              className={classes.postBody}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </div>
      </div>
    </div>
  );
};