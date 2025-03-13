const datastore = require('../models');
// GET all videos

const getAllVideos = (req, res)=>{ 
    res.status(200).json(datastore.videos);
};

// GET video by TO

const getVideoById=(req, res)=>{ 
    const videold=parseInt(req.params.id); 
    const video=datastore.videos.find(v=>v.id === videold);
    
    if (!video) {
        return res.status(404).json({error: 'Video not found' });
    }
    
    res.status(200).json(video);
};

// POST create a new video
const createVideo=(req, res)=>{
    const {title, description, url, userId} = req.body;

// Basic validation
if (title || turl || luserid) { 
    return res.status(400).json({ error: 'Required fields missing' });
}

// Check if user exists
const userExists = dataStore.users.some(user => user.id === parseInt(userId)); 
if (!userExists) {
    return res.status(400).json({ error: 'User does not exist' });
}

const newWideo = {
    id: dataStore.nextIds.videos++,
    title,
    description: description || יי. 
    url, 
    userId: parseInt(userId), 
    Likes: [], 
    createdAt: new Date().toISOString()
};

dataStore.videos.push(newVideo);

res.status(201).json(newVideo);
};

// PUT update a video

const updateVideo =(req, res) => { 
    const videold = parseInt(req.params.id); 
    const videoIndex = datastore.videos.findIndex(v => v.id === videoidis);

    if (videoIndex === -1) {
        return res.status(404).json({ error: 'Video not found'});
    }
    
    const {title, description, url}=req.bodys 
    const video=datastore.videos[videoIndex];
            
    // Update fields if provided 
    if (title) video.title =title; 
    if (description != undefined) video.description = descriptions 
    if (url) video.url- url;
    
    video.updatedAt = new Date().toISOString();
    
    res.status(200).json(video);
};  
    // DELETE a video
const deleteVideo = (req, res) => { 
    const videold = parseInt(req.params.id); 
    const videoIndex = datastore.videos.findIndex(v=>v.id === videoId);
    
    if (videoIndex==-1) {
        return res.status(404).json({ error: 'Video not found' }); 
    }
    
    // Remove the video
    dataStore.videos.splice(videoIndex, 1);
    
    // Also move associated comments
    datastore.comments = datastore.comments.filter(c=>c.videold !== videold);
    
    res.status(204).end();
};
    
    // GET video comments
    
const getVideoComments = (req, res) => { 
    const videold= parseInt(req.params.id); 
    const video =dataStore.videos.find(v=> v.id === videoId);
    
    if (!video) {
    
    return res.status(404).json({ error: 'Video not found' }); 
    }
    
    const comments=  datastore.comments.filter(c=> c.videold === videoId); 
    res,status(200).json(comments);
};

// GET video likes

const getVideoLikes = (req, res) => {
    const videold =parseInt(req.params.id); 
    const video =datastore.videos.find(v=> v.id=== videold);
    
    if (!video) {
        return res.status(404).json({ error: 'Video not found' }); 
    }
    
    const likedUsers =video.likes.map(userId=>{ 
        return datastore.users.find(user=> user.id ===userId); 
    }).Filter(Boolean);
          
    res.status(200).json (likedUsers);
};   
    // POST like a video
    
    const likeVideo = (req, res) => {
    const videold  = parseInt(req.params.id);
     const { userId} = req.body;
    
    if (!userId) {
    return res.status(400).json({ error: 'userId is required' }); 
}
    
    const userIdInt = parseInt(userId); 
    const video = dataStore.videos.find(v =>v.id=== videoId);
    const user = dataStore.users.find(u=>u.id ===userIdInt);
    
    if (!video) {
    
    return res.status(404).json({ error: 'Video not found' }); 
}
    
    if (!user) {
    
    return res.status(404).json({ error: 'User not found' }); 
}
    
    // Check if already liked
    
    if (video.likes.includes (userIdInt)) { 
        return res.status(409).json({ error: 'User already liked this video' }); 
    }
    
    // Add Like
    
    video.likes.push(userIdInt);
    
    res.status(201).json({message: 'Video liked successfully' });
};
// DELETE unlike a video
const unlikeVideo=(req, res) => {
    const videold=parseInt(req.params.id);
    const {userId} = req.body;

if (!userId) {
    return res.status(400).json({ error: 'userId is required' }); 
}

const userIdInt = parseInt(userId);
const video=dataStore.videos.find(v=> v.id === videoId);

if (!video) {
    return res.status(404).json({ error: 'Video not found' }); 
}

// Check if user has liked the video
const likeIndex=video.likes.indexOf(userIdInt);
if (likeIndex===-1){
    return res.status(404).json({ error: 'Like not found' });
}

// Remove like
video.likes.splice(likeIndex, 1);
res.status(204).end();

};

module.exports = {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
    getVideoComments,
    getVideoLikes,
    likeVideo,
    unlikeVideo
};