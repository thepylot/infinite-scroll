from django.shortcuts import render
from .models import Post
from django.views.generic.list import ListView

class PostsView(ListView):
    model = Post
    paginate_by = 4 # number of posts will load
    context_object_name = 'posts'
    template_name = 'posts.html'
    ordering = ['-title']
